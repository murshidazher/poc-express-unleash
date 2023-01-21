# poc-express-unleash

> 🚀 A proof of concept for using Unleash feature flag service with express

- Unleash an open-source software for managing feature flags for trunk-based development.
- Documentation for Getting started with Unleash could be found [here](https://docs.getunleash.io/reference/deploy/getting-started)
- Docker compose file and setup can be found [here](https://github.com/Unleash/unleash-docker)

## Getting Started

### Docker-compose

1. Clone the `unleash-docker` repository. `git clone git@github.com:Unleash/unleash-docker.git`
2. Run `docker-compose build` in repository root folder.
3. Run `docker-compose` up in repository root folder.

### User accounts

- Once started up, you'll have a user with
  - username: `admin`
  - password: `unleash4all`

## Common issues

### Work locally with this repo

> 🌟 This section is adapted from adapted from [unleash-docker docs](https://github.com/Unleash/unleash-docker#work-locally-with-this-repo).

Start by cloning this repository.

The unleash community has set up `docker-compose` to start `postgres` and the `unleash server` together. This makes it really fast to start up `unleash` locally without setting up a database or node.

```sh
docker-compose build
docker-compose up
```

On some computers, the database won't start in time for `Unleash` the first time you run this.
If Unleash fails to reach the database, `docker-compose restart web` usually resolves the issue.

## LICENSE

2023 &copy; Murshid Azher.
