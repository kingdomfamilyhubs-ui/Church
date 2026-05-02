'use server';
/**
 * @fileOverview An AI tool that provides historical, theological, and contextual background for specific Bible verses.
 *
 * - getScriptureInsight - A function that handles the process of getting scripture insights.
 * - ScriptureInsightInput - The input type for the getScriptureInsight function.
 * - ScriptureInsightOutput - The return type for the getScriptureInsight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ScriptureInsightInputSchema = z.object({
  verse: z.string().describe('The Bible verse (e.g., "John 3:16", "Genesis 1:1") for which to provide insight.'),
});
export type ScriptureInsightInput = z.infer<typeof ScriptureInsightInputSchema>;

const ScriptureInsightOutputSchema = z.object({
  historicalBackground: z.string().describe('A brief historical background of the verse, including cultural and social context of the time it was written.'),
  theologicalContext: z.string().describe('A brief explanation of the theological themes and doctrines present in or related to the verse.'),
  contextualMeaning: z.string().describe('A brief explanation of the verse within its immediate literary context and its broader biblical narrative.'),
});
export type ScriptureInsightOutput = z.infer<typeof ScriptureInsightOutputSchema>;

export async function getScriptureInsight(input: ScriptureInsightInput): Promise<ScriptureInsightOutput> {
  return scriptureInsightFlow(input);
}

const prompt = ai.definePrompt({
  name: 'scriptureInsightPrompt',
  input: {schema: ScriptureInsightInputSchema},
  output: {schema: ScriptureInsightOutputSchema},
  prompt: `You are an expert biblical scholar and theologian. Your task is to provide a comprehensive, yet concise, background for a given Bible verse, focusing on three key aspects: historical background, theological context, and contextual meaning.

Provide the information for the following Bible verse: {{{verse}}}

1.  **Historical Background:** Explain the historical and cultural setting of the time the verse was written. Include any relevant social customs, political situations, or specific events that might illuminate its original meaning.
2.  **Theological Context:** Discuss the theological themes, doctrines, or concepts that are either explicitly stated or implicitly present in the verse. How does this verse contribute to broader biblical theology?
3.  **Contextual Meaning:** Analyze the verse within its immediate literary context (what comes before and after it) and its broader place within the book or even the entire Bible. What is its primary message in that context?

Ensure your response is factual, insightful, and easy to understand for a general audience.
`,
});

const scriptureInsightFlow = ai.defineFlow(
  {
    name: 'scriptureInsightFlow',
    inputSchema: ScriptureInsightInputSchema,
    outputSchema: ScriptureInsightOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
