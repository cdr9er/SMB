import { motionTemplate } from './motionTemplate';

export async function generateMotion(laymanText, motionType, caseInfo) {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });

  const motionData = {
    court: caseInfo.court || "________",
    county: caseInfo.county || "________",
    caseNumber: caseInfo.caseNo || "________",
    petitioner: caseInfo.petitioner || "________",
    respondent: caseInfo.respondent || "________",
    petitionerAddress: caseInfo.petitionerAddress || "________",
    petitionerPhone: caseInfo.petitionerPhone || "________",
    petitionerEmail: caseInfo.petitionerEmail || "________",
    children: caseInfo.children || "________",
    relocationDate: caseInfo.relocationDate || today,
    today,
    respondentEmail: caseInfo.respondentEmail || "________",
    respondentAddress: caseInfo.respondentAddress || "________",
  };

  return motionTemplate(motionData);
}
