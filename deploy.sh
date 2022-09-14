set -e
npm run build
cd dist

git add .
git commit -m "deploy"
git push -f git@github.com:GrajalesU/fakejobposting-front.git main:gh-pages

cd -