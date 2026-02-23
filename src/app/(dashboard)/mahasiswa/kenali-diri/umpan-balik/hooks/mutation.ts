import {
  GetStudentFeedbackParams,
  StudentFeedbackResponse,
} from '@/types/kenali-diri'
import axios from 'axios' // Import AxiosError
import { cookies } from 'next/headers'

/**
 * Reads the access token from cookies.
 */
async function getAuthToken(): Promise<string | undefined> {
  const cookieStore = await cookies()
  const token = cookieStore.get('@rextra/access_token')?.value
  return token
}

// ─── API Call ─────────────────────────────────────────────────────────────────

const BASE_URL =
  process.env.NEXT_PUBLIC_RUN_MODE === 'production'
    ? process.env.NEXT_PUBLIC_API_URL_PROD
    : process.env.NEXT_PUBLIC_API_URL_DEV

export async function getStudentFeedbacks(
  params: GetStudentFeedbackParams = {},
): Promise<StudentFeedbackResponse> {
  const { page = 1, page_size = 25, search, test_category } = params

  const token = await getAuthToken()

  if (!token) {
    console.error('[getStudentFeedbacks] No access token found.')
    throw new Error('Unauthorized: No session found.')
  }

  try {
    const response = await axios.get<StudentFeedbackResponse>(
      `${BASE_URL}/api/v1/admin/kenali-diri/feedback/student`,
      {
        params: {
          page,
          page_size,
          ...(search && { search }),
          ...(test_category && { test_category }),
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    return response.data
  } catch (error: unknown) {
    // Change any to unknown
    // Use axios.isAxiosError for type narrowing
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        console.error('[getStudentFeedbacks] Token expired or invalid')
      }
    } else {
      console.error(
        '[getStudentFeedbacks] An unexpected error occurred:',
        error,
      )
    }

    throw error
  }
}
