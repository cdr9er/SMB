
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Store securely in your environment
});

export async function generateMotion(laymanText, motionType, caseInfo) {
  const {
    court, county, caseNo, petitioner, respondent,
    petitionerAddress, petitionerPhone, petitionerEmail,
    children, relocationDate, respondentEmail, respondentAddress
  } = caseInfo;

  const prompt = `
You are a Florida family law paralegal. Draft a formal legal motion based on the user's layman description.
Use official formatting for:
- The caption (with court, county, petitioner, respondent, case number)
- Motion title and structure (facts, legal support, relief requested)
- Certificate of service

Input:
- Court: ${court}
- County: ${county}
- Case No: ${caseNo}
- Petitioner: ${petitioner}
- Respondent: ${respondent}
- Petitioner Address: ${petitionerAddress}
- Petitioner Phone: ${petitionerPhone}
- Petitioner Email: ${petitionerEmail}
- Respondent Email: ${respondentEmail}
- Respondent Address: ${respondentAddress}
- Children: ${children}
- Relocation Date: ${relocationDate}
- Motion Type (optional): ${motionType}
- Layman Description: ${laymanText}

Return the motion in plain text, not HTML. Format it like a court filing.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    });

    return completion.choices[0].message.content;
  } catch (err) {
    console.error('Motion generation failed:', err);
    return 'An error occurred while generating the motion.';
  }
}
