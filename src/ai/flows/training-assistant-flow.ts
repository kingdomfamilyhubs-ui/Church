
'use server';
/**
 * @fileOverview An AI assistant for the Mandatory Visitor Training program.
 * 
 * - trainingAssistant - A function that handles questions about the visitor training.
 * - TrainingInput - The input type for the assistant.
 * - TrainingOutput - The output type for the assistant.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TrainingInputSchema = z.object({
  question: z.string().describe('The visitor\'s question about the training or the church mandate.'),
  context: z.string().optional().describe('The current training module or path (Local/International).'),
});
export type TrainingInput = z.infer<typeof TrainingInputSchema>;

const TrainingOutputSchema = z.object({
  answer: z.string().describe('The spiritually grounded and professional answer.'),
  scriptureReference: z.string().optional().describe('A relevant Bible verse supporting the answer.'),
});
export type TrainingOutput = z.infer<typeof TrainingOutputSchema>;

export async function trainingAssistant(input: TrainingInput): Promise<TrainingOutput> {
  return trainingAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'trainingAssistantPrompt',
  input: {schema: TrainingInputSchema},
  output: {schema: TrainingOutputSchema},
  prompt: `You are the Prophetic Onboarding Assistant for Growing In Faith Global Church. 
Our mandate is "Transforming non extinct into existence" based on Romans 4:17. 
We raise a unique prophetic generation to dominate, govern, and colonize the earth with kingdom culture.

The user is a visitor currently undergoing mandatory training. 
Context: {{{context}}}
User Question: {{{question}}}

Provide a professional, authoritative, yet welcoming response that aligns with our apostolic oversight. 
If the question is about protocols, emphasize order and spiritual purity. 
If the question is about the mission, emphasize global impact and prophetic identity.`,
});

const trainingAssistantFlow = ai.defineFlow(
  {
    name: 'trainingAssistantFlow',
    inputSchema: TrainingInputSchema,
    outputSchema: TrainingOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
