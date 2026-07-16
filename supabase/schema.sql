-- Bu dosyayı Supabase Dashboard > SQL Editor içine yapıştırıp "Run" ile çalıştırın.
-- Site içeriğinin tamamı tek bir tabloda, bölüm başına bir JSON satırı olarak tutulur.

create table if not exists sections (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Sadece sunucu tarafımız (service_role anahtarıyla) bu tabloya erişecek,
-- bu yüzden Row Level Security kapalı bırakılabilir; istenirse aşağıdaki
-- satırlarla açılıp herkese kapatılabilir (service_role RLS'yi zaten by-pass eder):
-- alter table sections enable row level security;

-- Görsel yüklemeleri (profil fotoğrafı vb.) için depo (Storage) bucket'ı:
-- Dashboard'da: Storage > New bucket > Name: site-images > Public bucket: ON
