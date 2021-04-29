# NOTES

A few notes regarding the exercise

## Libraries

I used NextJS because it's my preferred choice. Also, compared to CRA it's easier to implement certain libraries/solutions. e.g: Tailwind requires to override the `react-scripts`.

### Styling

I have choosen Tailwind because it's fast to develop a POC with it. Given more time probably I would go for a CSS-in-JS solution (e.g: `stitchesjs`).

### State management

- Server state: I used `react-query`, my preferred choice due the great and easy to use API.
- State management: `zustand`. A simple client state that pairs really well with `react-query`.
- Animations: Framer Motion.

## Testing

Due to keep the test time boxed I only tested a few things to showcase different test cases:

- useLikeStore: for testing hooks
- ProductCard: to test a normal component
- ProductList: to test a component with asyncronous data.

## Developer eXperience

I have added a few of the things I usually like to work with to enhance the productivity:

- ESlint & Prettier to deal with lint and formatting
  - I use `Alloy` as the main ESLint config: [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)
- Husky and lint-staged to automate the previous point and some safe checks
- NVM for align all enviroments node versions

## Other

The app was only tested on the following browsers:

- Firefox (Latest)
- Microsoft Edge (Latest)
- Firefox iOS (Latest)

The app should be "responsive" enough to adecuate to any screen.
