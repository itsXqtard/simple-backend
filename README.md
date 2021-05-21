# my-first-backend

Simply backend that sends information about Frank Sinatra

## Endpoints

GET `/` : This action will give a random (from a pool of atleast 20) song name from `Frank Sinatra`.

GET `/birth_date` : This action will give `Frank Sinatra`'s birth date.

GET `/birth_city` : This action will give `Frank Sinatra`'s birth city.

GET `/wives` : This action will give all the names of `Frank Sinatra`'s wives.

GET `/picture` : This action will give `Frank Sinatra`'s picture.

GET `/public` : This action will print `"Everybody can see this page"`

GET `/protected` : This action will be protected by a HTTP Basic access authentication and print `"Welcome, authenticated client"` if user is authorized with the login admin and password admin otherwise it will provide a `401 Not authorized`.

## Authors

[@Quang Doan](https://git.us.qwasar.io/doan_q)

## Version History

* 0.1
    * Initial Release
