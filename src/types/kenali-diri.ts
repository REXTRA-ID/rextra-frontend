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
  test_id: string          // e.g., "PK12"
  user_name: string        // e.g., "John Doe"
  category_name: string    // e.g., "Minat Bakat"
  status: 'completed' | 'in_progress' | 'abandoned' // Updated status types
  result_code: string      // e.g., "RIA", ""
  started_at: string       // e.g., "01 Jan 2024 10:00"
  completed_at?: string    // Optional/Nullable
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