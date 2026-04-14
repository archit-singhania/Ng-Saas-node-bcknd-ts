import dbConfig from '../config/db';

export const TABLE = `"${dbConfig.schema}"."call_logs"`;

export interface CallLogRow {
  id:               number;
  phone_number:     string | null;
  caller_name:      string | null;
  duration_seconds: number | null;
  call_date:        Date   | null;
  created_at:       Date   | null;
  transcript:       string | null;
  recording_url:    string | null;
}
