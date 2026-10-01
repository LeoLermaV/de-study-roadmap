export type TopicStatus = 'not-started' | 'in-progress' | 'done'

export type ResourceType = 'video' | 'article' | 'interactive' | 'course' | 'documentation'

export type TopicType = 'theory' | 'project' | 'setup'

export interface Resource {
  title: string
  url: string
  type: ResourceType
  free: boolean
  priority?: 'must-read' | 'skim'
}

export interface Topic {
  id: string
  title: string
  estimatedHours: number
  type: TopicType
  why: string
  what: string[]
  where: string
  resources: Resource[]
}

export interface Phase {
  title: string
  topics: Topic[]
}

export type ReadingFormat = 'read' | 'watch' | 'listen' | 'listen-or-read' | 'look' | 'try' | 'keep'

export interface ReadingItem {
  format: ReadingFormat
  time: string
  nz?: boolean
  text: string
  parts?: string[]
}

export interface ComplementaryTopic {
  id: string
  title: string
  startMinutes: number
  easiestWayIn: string
  buildsOn: string[]
  helpsWith: string[]
  why: string
  keyIdeas: string[]
  connects: string
  notice: string
  startHere: ReadingItem[]
  more: ReadingItem[]
}

export interface UserProgress {
  [topicId: string]: {
    status: TopicStatus
    notes: string
    startedAt?: number
    completedAt?: number
    reviewedAt?: number
  }
}
