# CasaMinder Deployment

## Recommended stack

- Repository: GitHub
- Hosting: Vercel
- Domain: `casaminder.com`

## Environment variable

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=351900000000
```

## Publish flow

1. Create a new GitHub repository named `casaminder`.
2. Push this project to that repository.
3. Import the repository into Vercel.
4. Add the environment variable above in Vercel.
5. Add `casaminder.com` and `www.casaminder.com` in Vercel Domains.
6. Update your DNS records to the values Vercel shows.

## Typical DNS values

- Apex domain `casaminder.com`: `76.76.21.21`
- `www`: `cname.vercel-dns.com`

Use the exact values shown in Vercel if they differ.
