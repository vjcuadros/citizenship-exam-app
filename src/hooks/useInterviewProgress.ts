import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "citizenship-exam-interview-progress-v1";

interface InterviewProgressState {
  /** Question ids the user has self-marked as "ready to answer". */
  readyIds: string[];
}

function emptyState(): InterviewProgressState {
  return { readyIds: [] };
}

function load(): InterviewProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    return { ...emptyState(), ...(JSON.parse(raw) as InterviewProgressState) };
  } catch {
    return emptyState();
  }
}

function save(state: InterviewProgressState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable - fail silently.
  }
}

/**
 * Lightweight localStorage-backed tracker for the interview-prep module.
 * These questions have no single correct answer, so progress is just a
 * self-reported "I feel ready to answer this" checklist rather than a score.
 */
export function useInterviewProgress() {
  const [state, setState] = useState<InterviewProgressState>(() => load());

  useEffect(() => {
    save(state);
  }, [state]);

  const isReady = useCallback((id: string) => state.readyIds.includes(id), [state]);

  const toggleReady = useCallback((id: string) => {
    setState((prev) => {
      const next = prev.readyIds.includes(id)
        ? prev.readyIds.filter((existing) => existing !== id)
        : [...prev.readyIds, id];
      return { ...prev, readyIds: next };
    });
  }, []);

  const getReadyCount = useCallback(() => state.readyIds.length, [state]);

  return { isReady, toggleReady, getReadyCount };
}
