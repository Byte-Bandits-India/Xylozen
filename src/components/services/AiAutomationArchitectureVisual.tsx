'use client'

import React from 'react'
import AccordionGallery, { AccordionGalleryItem } from '@/components/ui/AccordionGallery'
import {
  archAiMultimodal,
  archAiAgentOrchestrator,
  archAiVectorMemory,
  archAiActionMesh,
  archAiGuardrails,
} from '@/assets/images'

const aiAutomationTiers: AccordionGalleryItem[] = [
  {
    image: archAiMultimodal,
    label: 'Multimodal Ingestion',
    description:
      'FastAPI streaming ingestion of unstructured PDFs, vision feeds, audio streams, and enterprise webhook events normalized into structured schemas.',
    link: '/contact',
  },
  {
    image: archAiAgentOrchestrator,
    label: 'Agentic Orchestration',
    description:
      'LangChain & Claude/GPT-4o autonomous reasoning runtime with dynamic tool selection, multi-turn task planning, and deterministic state machines.',
    link: '/contact',
  },
  {
    image: archAiVectorMemory,
    label: 'Private Vector Memory',
    description:
      'Qdrant & Pinecone hybrid semantic search clusters over private enterprise knowledge bases with strict tenant isolation and sub-50ms retrieval.',
    link: '/contact',
  },
  {
    image: archAiActionMesh,
    label: 'Autonomous Action Mesh',
    description:
      'Reliable enterprise API tool execution engine with idempotent webhook retries, transaction rollbacks, and distributed workflow dispatching.',
    link: '/contact',
  },
  {
    image: archAiGuardrails,
    label: 'Guardrails & Telemetry',
    description:
      'Confidence scoring thresholds, cryptographic audit trails, automated human-in-the-loop escalation, and 99.5% verified decision accuracy.',
    link: '/contact',
  },
]

export function AiAutomationArchitectureVisual() {
  return (
    <div className="w-full">
      <AccordionGallery
        items={aiAutomationTiers}
        defaultIndex={1}
        expandRatio={0.48}
        trigger="hover"
        height="500px"
        gap="12px"
        radius="1.25rem"
      />
    </div>
  )
}
