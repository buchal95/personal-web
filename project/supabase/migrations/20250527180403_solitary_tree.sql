/*
  # Create contacts table for form submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp with timezone, default: now())
      - `status` (text, default: 'new')

  2. Security
    - Enable RLS on contacts table
    - Add policy for inserting new contacts
    - Add policy for reading contacts (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact forms
CREATE POLICY "Anyone can submit contact forms" 
  ON contacts 
  FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Only authenticated users can view contacts
CREATE POLICY "Only authenticated users can view contacts" 
  ON contacts 
  FOR SELECT 
  TO authenticated 
  USING (true);