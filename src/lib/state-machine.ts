import { AgentState, RiskLevel } from "@/types/research";
export const needsApproval = (level: RiskLevel) => ["L3","L4","AUTH"].includes(level);
export const transitions: Record<AgentState, AgentState[]> = {
 planning:["researching","paused"], researching:["decision_required","human_takeover","paused","completed"],
 decision_required:["researching","paused","human_takeover"], human_takeover:["researching","paused"],
 paused:["researching"], completed:[]
};
