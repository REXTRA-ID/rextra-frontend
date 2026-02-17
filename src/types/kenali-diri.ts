// types/kenali-diri.ts

export interface PaginationMeta {
  current_page: number
  total_pages: number
  total_records: number
  per_page: number
}

// Matches: { "data": { "data": [], "pagination": {} } }
export interface PaginatedResponse<T> {
  data: T[]
  pagination: PaginationMeta
}

// Matches: { "success": true, "message": "...", "data": ... }
export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}

/**
 * Updated based on Postman Output
 */
export interface KenaliDiriHistoryItem {
  test_id: string // e.g., "PK12"
  user_name: string // e.g., "John Doe"
  category_name: string // e.g., "Minat Bakat"
  status: 'completed' | 'in_progress' | 'abandoned' // Updated status types
  result_code: string // e.g., "RIA", ""
  started_at: string // e.g., "01 Jan 2024 10:00"
  completed_at?: string // Optional/Nullable
  riasec_code_type?: 'single' | 'dual' | 'triple' // Optional
}

export interface BulkDeleteRequest {
  test_ids: string[] // Changed from number[] to string[] to match test_id "PK12"
}

export interface BulkDeleteResponse {
  success: boolean
  message: string
}

export interface ExportHistoryRequest {
  format: 'csv' | 'xlsx'
  category_id?: number
  status?: 'completed' | 'in_progress' | 'abandoned'
  start_date?: string
  end_date?: string
}

// ─── Shared types ────────────────────────────────────────────────────────────
// This file has NO server-only imports. Safe to import from both
// server components (page.tsx, mutation.ts) and client components
// (DataTabs, TestExpertTable, etc.)

// ─── Student Feedback types ──────────────────────────────────────────────────

export interface StudentInfo {
  user_id: string
  name: string
  email: string
}

export interface StudentFeedbackScores {
  ease: number
  relevance: number
  satisfaction: number
}

export interface StudentFeedbackItem {
  id: number
  student: StudentInfo
  scores: StudentFeedbackScores
  obstacles: FeedbackObstacle[] // reuses the shared FeedbackObstacle type
  message_to_team: string | null
  submitted_at: string
  test_category: string
  test_category_label: string
}

export interface StudentFeedbackData {
  items: StudentFeedbackItem[]
  pagination: PaginationMeta // reuses the shared PaginationMeta type
}

export interface StudentFeedbackResponse {
  success: boolean
  message: string
  data: StudentFeedbackData
}

export interface GetStudentFeedbackParams {
  page?: number
  page_size?: number
  search?: string
  test_category?: string
}

export interface ExpertInfo {
  name: string
  profession: string
  profession_id: number
}

export interface FeedbackScores {
  accuracy: number
  logic: number
  usefulness: number
}

export interface FeedbackObstacle {
  key: string
  label: string
  other_text: string | null
}

export interface ExpertFeedbackItem {
  id: number
  expert: ExpertInfo
  top5_status: string
  top5_status_label: string
  scores: FeedbackScores
  obstacles: FeedbackObstacle[]
  has_suggestion: boolean
  submitted_at: string
  test_category: string
  test_category_label: string
}

export interface PaginationMeta {
  page: number
  page_size: number
  total_items: number
  total_pages: number
  has_next: boolean
  has_prev: boolean
}

export interface ExpertFeedbackData {
  items: ExpertFeedbackItem[]
  pagination: PaginationMeta
}

export interface ExpertFeedbackResponse {
  success: boolean
  message: string
  data: ExpertFeedbackData
}

export interface GetExpertFeedbackParams {
  page?: number
  page_size?: number
  search?: string
  test_category?: string
}
