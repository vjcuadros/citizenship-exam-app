import { Link } from "react-router-dom";
import { useMemo } from "react";
import { INTERVIEW_CATEGORIES, INTERVIEW_QUESTIONS, type InterviewCategory } from "../data/interview";
import { useInterviewProgress } from "../hooks/useInterviewProgress";
import { FlipCard } from "../components/FlipCard";
import "../App.css";

type CategoryGroup = [InterviewCategory, typeof INTERVIEW_QUESTIONS];

function groupByCategory(): CategoryGroup[] {
  return INTERVIEW_CATEGORIES.map((category) => [
    category,
    INTERVIEW_QUESTIONS.filter((q) => q.category === category),
  ]);
}

/**
 * Interview-prep module: personal "Good Moral Character" / eligibility
 * questions the officer asks verbally during the N-400 interview, separate
 * from the civics and English tests. These have no single correct answer,
 * so cards show guidance on what's being asked instead of a graded score.
 */
export function InterviewPractice() {
  const { isReady, toggleReady, getReadyCount } = useInterviewProgress();
  const groups = useMemo(() => groupByCategory(), []);

  return (
    <div className="page">
      <p className="breadcrumb">
        <Link to="/">← Back to home</Link>
      </p>
      <h1 className="page__title">Interview Questions</h1>
      <p className="page__subtitle">
        Besides civics and English, the officer also asks personal eligibility and "good moral
        character" questions during your N-400 interview. These have no single correct answer —
        tap a card to see what's really being asked and tips for answering honestly.
        {" "}
        {getReadyCount()}/{INTERVIEW_QUESTIONS.length} marked as ready.
      </p>
      <p className="page__subtitle" style={{ fontSize: "0.8rem" }}>
        This is general information, not legal advice. If any question raises a complicated
        situation for you, consider speaking with an immigration attorney before your interview.
      </p>
      {groups.map(([category, items]) => (
        <section key={category} style={{ marginBottom: "1.5rem" }}>
          <h2 className="page__title" style={{ fontSize: "1.05rem", textAlign: "left" }}>
            {category}
          </h2>
          <div className="card-grid">
            {items.map((item) => {
              const ready = isReady(item.id);
              return (
                <div key={item.id}>
                  <FlipCard
                    frontLabel="Question"
                    backLabel="What it's asking / tips"
                    front={
                      <>
                        <p>{item.question}</p>
                        {item.questionEs && (
                          <p style={{ fontSize: "0.8rem", opacity: 0.75 }}>{item.questionEs}</p>
                        )}
                      </>
                    }
                    back={
                      <>
                        <p>{item.guidance}</p>
                        {item.guidanceEs && (
                          <p style={{ fontSize: "0.8rem", opacity: 0.75 }}>{item.guidanceEs}</p>
                        )}
                      </>
                    }
                  />
                  <button
                    type="button"
                    className={`btn ${ready ? "btn--primary" : ""}`}
                    style={{ width: "100%", marginTop: "0.5rem", maxWidth: 480 }}
                    onClick={() => toggleReady(item.id)}
                  >
                    {ready ? "✓ Ready" : "Mark as ready"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
