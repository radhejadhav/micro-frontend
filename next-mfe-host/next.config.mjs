/** @type {import('next').NextConfig} */

import NextFederationPlugin from '@module-federation/nextjs-mf';

const remotes = isServer => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
        remote1: `remoteApp@http://localhost:3001/static/${location}/remoteEntry.js`,
        remote2: `HostMfe@http://localhost:3002/static/${location}/remoteEntry.js`
    };
};

const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:8080/api/:path*' // Proxy to Backend
          }
        ]
      },
    reactStrictMode: true,
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'host',
                filename: 'remoteEntry.js',
                remotes: remotes(options.isServer),  
                extraOptions: {
                    debug: true, // `false` by default
                    exposePages: true, // `false` by default
                  }  
            })
        )
        
        return config
    }
};

export default nextConfig