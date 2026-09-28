export type EvidenceState = "verified" | "observed" | "analysis";
export type AgentState = "planning" | "researching" | "decision_required" | "human_takeover" | "paused" | "completed";
export type RiskLevel = "L0" | "L1" | "L2" | "L3" | "L4" | "AUTH";

export interface Evidence { id:string; kind:"screenshot"|"action"|"recording"; capturedAt:string; url:string; label:string; }
export interface Observation { id:string; state:EvidenceState; title:string; detail:string; evidenceIds:string[]; capturedAt:string; }
export interface ResearchTask { id:string; title:string; status:"done"|"active"|"queued"|"blocked"; coverage:number; }
export interface DecisionGate { id:string; level:RiskLevel; action:string; reason:string; consequences:string[]; }
export interface ResearchSession { id:string; product:string; url:string; goal:string; state:AgentState; startedAt:string; tasks:ResearchTask[]; observations:Observation[]; evidence:Evidence[]; gate?:DecisionGate; }
