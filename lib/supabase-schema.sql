-- Run this in your Supabase SQL editor

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  clerk_user_id text unique not null,
  email text not null,
  paid boolean default false,
  paid_at timestamptz,
  created_at timestamptz default now()
);

-- Enable RLS
alter table users enable row level security;

-- Only service role can read/write (webhooks use service role key)
create policy "Service role only" on users
  using (false);
