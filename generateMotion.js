
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Store securely in your environment
});

// generateMotion.js
export async function generateMotion(laymanText, motionType, caseInfo) {
  const defaultCourt = `IN THE CIRCUIT COURT OF THE ${caseInfo.court} JUDICIAL CIRCUIT`;
  const countyLine = `IN AND FOR ${caseInfo.county.toUpperCase()} COUNTY, FLORIDA`;

  // Determine motion title intelligently
  let motionTitle = "MOTION FOR RELIEF";
  const description = laymanText.toLowerCase();

  if (motionType && motionType.trim()) {
    motionTitle = motionType.toUpperCase();
  } else if (description.includes("injunction") || description.includes("restrain") || description.includes("emergency")) {
    motionTitle = "EMERGENCY MOTION FOR TEMPORARY INJUNCTION";
  } else if (description.includes("contempt") || description.includes("violation")) {
    motionTitle = "MOTION FOR CIVIL CONTEMPT";
  } else if (description.includes("modify") || description.includes("change custody") || description.includes("time-sharing")) {
    motionTitle = "SUPPLEMENTAL PETITION TO MODIFY PARENTING PLAN";
  } else if (description.includes("discovery") || description.includes("compel")) {
    motionTitle = "MOTION TO COMPEL DISCOVERY";
  } else if (description.includes("dismiss")) {
    motionTitle = "MOTION TO DISMISS";
  } else if (description.includes("relocate") || description.includes("move out of state")) {
    motionTitle = "EMERGENCY MOTION TO DENY OR DEFER REMOVAL OF MINOR CHILDREN FROM THE STATE OF FLORIDA";
  }

  return `
<b>${defaultCourt}</b><br/>
<b>${countyLine}</b><br/><br/>

<b>Case No:</b> ${caseInfo.caseNo}<br/>
<b>${caseInfo.petitioner}</b>, Petitioner,<br/>
vs.<br/>
<b>${caseInfo.respondent}</b>, Respondent.<br/><br/>

<center><b>${motionTitle}</b></center><br/>

COMES NOW the ${caseInfo.petitioner ? "Petitioner" : "Movant"}, ${caseInfo.petitioner || "[Petitioner Name]"}, and respectfully files this ${motionTitle.toLowerCase()} and as grounds states as follows:<br/><br/>

1. ${laymanText}<br/><br/>

WHEREFORE, the ${caseInfo.petitioner ? "Petitioner" : "Movant"} respectfully requests this Honorable Court grant the relief requested herein and any other relief deemed just and proper.<br/><br/>

<b>Respectfully submitted,</b><br/><br/>
<b>${caseInfo.petitioner || "[Petitioner Name]"}</b><br/>
${caseInfo.petitionerAddress || "[Address]"}<br/>
${caseInfo.petitionerPhone || "[Phone]"}<br/>
${caseInfo.petitionerEmail || "[Email]"}<br/><br/>

<b>CERTIFICATE OF SERVICE</b><br/>
I HEREBY CERTIFY that a true and correct copy of the foregoing has been furnished to <b>${caseInfo.respondent || "[Respondent Name]"}</b> at <b>${caseInfo.respondentEmail || "[Respondent Email]"}</b> or ${caseInfo.respondentAddress || "[Respondent Address]"} on this ___ day of __________, 20__.<br/><br/>

__________________________<br/>
${caseInfo.petitioner || "[Petitioner Name]"}<br/>
  `.trim();
}
