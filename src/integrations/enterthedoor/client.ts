import { createClient } from "@supabase/supabase-js";

// 知识之门（enterthedoor.org）的共享后端 —— anon key 是公开的，安全
const SHARED_URL = "https://oinmbfktxyiqpktckoaf.supabase.co";
const SHARED_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pbm1iZmt0eHlpcXBrdGNrb2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxNzU4NjEsImV4cCI6MjA4Nzc1MTg2MX0.HKylo-ndFTPxB5KHKNJ5TYFLsuX7AB0oQdgZY4FOnkQ";

export const sharedSupabase = createClient(SHARED_URL, SHARED_ANON_KEY, {
  auth: {
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
    storageKey: "etd-shared-auth", // 避免和本地 supabase 冲突
    persistSession: true,
    autoRefreshToken: true,
  },
});

export type ContributorRole =
  | "founder"
  | "committee_member"
  | "core_contributor"
  | "contributor"
  | "observer";

export interface SharedContributor {
  id: string;
  user_id: string | null;
  display_name: string;
  bio: string | null;
  avatar_url: string | null;
  role: ContributorRole;
  specialties: string[] | null;
  joined_at: string;
  github_handle: string | null;
  total_contribution_points: number;
  is_public: boolean;
}

export interface SharedContribution {
  id: string;
  contributor_id: string;
  contribution_type: string;
  title: string;
  description: string | null;
  target_type: string | null;
  target_id: string | null;
  target_name: string | null;
  points: number;
  status: "pending" | "approved" | "merged" | "rejected";
  evidence_url: string | null;
  review_note: string | null;
  created_at: string;
}

export interface SharedGovernanceRule {
  id: string;
  rule_key: string;
  rule_value: unknown;
  description: string | null;
  category: string | null;
  is_active: boolean;
}

export const ROLE_RANK: Record<ContributorRole, number> = {
  founder: 0,
  committee_member: 1,
  core_contributor: 2,
  contributor: 3,
  observer: 4,
};