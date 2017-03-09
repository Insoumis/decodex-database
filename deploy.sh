#!/bin/bash

test_mode=false
if [[ "$1" == "test" ]] || [[ "$3" == "test" ]]; then
    test_mode=true
fi

if [[ false == $test_mode ]]; then

    set -o errexit -o nounset

    if [ "$TRAVIS_BRANCH" != "master" ]
    then
        echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
        exit 0
    fi

    rev=$(git rev-parse --short HEAD)

    mkdir deploy
    cd deploy

    echo $GH_TOKEN | cut -c1-5

    git init
    git config user.name "Lucas Gautheron"
    git config user.email "lucas.gautheron@gmail.com"

    git remote add origin "https://$GH_TOKEN@github.com/Insoumis/decodex-database.git"
else
    echo "Push cancelled (test mode)"
fi
git fetch origin
git fetch origin master
git fetch origin gh-pages

git checkout master
git checkout gh-pages
git merge -m"merge" master

python fetch.py
python fetch-v2.py

changes=$(git status -uno -s)

if [[ -n $changes ]]; then
    date=$(date)
    git add decodex_data.json database.json
    git commit -m"Update with $rev ($date)"
    if [[ false == $test_mode ]]; then
        git push
    else
        echo "Push cancelled (test mode)"
    fi
fi

