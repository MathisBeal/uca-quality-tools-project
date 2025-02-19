echo "Testing commitlint:";
echo '';
echo 'Testing on "test(commitlint): passe le test":';
npx commitlint --verbose --edit ./commitlint_tests/test_commit;
echo '';
echo 'Testing on "test(commitlint): ne passe pas le test":';
npx commitlint --verbose --edit ./commitlint_tests/test_commit_err;