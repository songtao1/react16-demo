const config = {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    apiUrl: process.env.NODE_ENV !== 'production'?'http://192.168.1.192:3000/op/api':'',
};

export default config