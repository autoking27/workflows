module.exports = {
    branches: "master"
    repositoryUrl: "https://github.com/Kenmakhanu/workflows",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm', 
        '@semantic-release/github']
  }