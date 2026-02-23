import {
  ExpertFeedbackResponse,
  GetExpertFeedbackParams,
} from '@/types/kenali-diri'
import axios from 'axios'
import { cookies } from 'next/headers'

/**
 * Reads the access token from cookies.
 * Matches the key used in your universal-cookie utility: '@rextra/access_token'
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

export async function getExpertFeedbacks(
  params: GetExpertFeedbackParams = {},
): Promise<ExpertFeedbackResponse> {
  const { page = 1, page_size = 25, search, test_category } = params

  const token = await getAuthToken()

  if (!token) {
    console.error('[getExpertFeedbacks] No access token found.')
    throw new Error('Unauthorized: No session found.')
  }

  try {
    const response = await axios.get<ExpertFeedbackResponse>(
      `${BASE_URL}/api/v1/admin/kenali-diri/feedback/expert`,
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
    // 1. Changed from any to unknown
    // 2. Use axios.isAxiosError for type narrowing
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        console.error('[getExpertFeedbacks] Token expired or invalid')
      }
    } else {
      // Handle non-axios errors (e.g., runtime crashes)
      console.error('[getExpertFeedbacks] An unexpected error occurred:', error)
    }

    throw error
  }
}
