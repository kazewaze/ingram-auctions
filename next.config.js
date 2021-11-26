const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/login',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}
