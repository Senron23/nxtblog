/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'images.unsplash.com',
        hostname:'source.unsplash.com',
        port: '',
        pathname: '/**',
        
      },
      new URL('https://github.com/shadcn.png','https://images.unsplash.com'),
      new URL('https://images.unsplash.com'),
    ]
  },
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:5500/api/:path*",
        },
      ];
    },
  };
  
  export default nextConfig;
  