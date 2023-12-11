docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba10-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba10-java/app ../../..
