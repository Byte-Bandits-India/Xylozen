'use client'

import React from 'react'
import AccordionGallery, { AccordionGalleryItem } from '@/components/ui/AccordionGallery'

const aiAutomationTiers: AccordionGalleryItem[] = [
  {
    image: '/images/architecture/ai/ai_multimodal_intake.jpg',
    label: 'Multimodal Ingestion',
    description:
      'FastAPI streaming ingestion of unstructured PDFs, vision feeds, audio streams, and enterprise webhook events normalized into structured schemas.',
    link: '/contact',
  },
  {
    image: '/images/architecture/ai/ai_agent_orchestrator.jpg',
    label: 'Agentic Orchestration',
    description:
      'LangChain & Claude/GPT-4o autonomous reasoning runtime with dynamic tool selection, multi-turn task planning, and deterministic state machines.',
    link: '/contact',
  },
  {
    image: '/images/architecture/ai/ai_vector_memory.jpg',
    label: 'Private Vector Memory',
    description:
      'Qdrant & Pinecone hybrid semantic search clusters over private enterprise knowledge bases with strict tenant isolation and sub-50ms retrieval.',
    link: '/contact',
  },
  {
    image: '/images/architecture/ai/ai_action_mesh.jpg',
    label: 'Autonomous Action Mesh',
    description:
      'Reliable enterprise API tool execution engine with idempotent webhook retries, transaction rollbacks, and distributed workflow dispatching.',
    link: '/contact',
  },
  {
    image: '/images/architecture/ai/ai_guardrails_security.jpg',
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
