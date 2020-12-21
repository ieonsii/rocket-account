# Development Instructions

## Prerequisites

### NodeJS and Yarn

This project requires NodeJS v12.6.0. [N](https://github.com/tj/n) or [NVM](https://github.com/nvm-sh/nvm) package can help to manage multiple versions on the same machine across other projects.

[Yarn](https://classic.yarnpkg.com/lang/en/) should be used for packages management and script running.

## Commit Guide

When commiting, finish the following sentence: "When commited it will...."

## Folder Structure

Root directory contains the main folder, `src`.

## Frontend

### Install

```
yarn install && yarn start
```

### Test

```
yarn test
```

## Tech Design

### Frontend

The Frontend utilises `react` via `create-react-app`, styled with `material-ui`. `react-hook-form` is used to faciliate the form function with submitting and validation.
