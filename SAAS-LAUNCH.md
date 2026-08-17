# Little Cipher SaaS launch map

## Business model

- Explorer: $19/month, one child profile.
- Family Salon: $39/month, up to four profiles.
- Founding Family: $290/year, annual Family Salon plus private collections.
- Acquisition: 14-day trial without a card, followed by an email conversion sequence.

## Production services still required

1. Authentication: parent accounts, password reset, email verification, and child profiles.
2. Subscription billing: Stripe Billing or another recurring-payment provider.
3. Database: families, profiles, riddle sets, completion history, preferences, and entitlements.
4. Member library: browse, filter, play, save, and print challenges.
5. Recommendation service: age and interest calibration with parent feedback.
6. Email: trial onboarding, Friday challenge delivery, billing notices, and cancellation confirmation.
7. Privacy and compliance: parental consent, minimal child data, privacy policy, terms, and deletion workflow.
8. Analytics: trial activation, first challenge completed, print/download rate, conversion, churn, and retention.

## Checkout configuration

Create recurring prices in the billing provider and paste the hosted checkout URLs into `store-config.js`. Empty plan URLs preserve the local prototype signup flow.

## Recommended first release

Build only parent authentication, one child profile, 100 curated riddles, weekly sets, printable PDFs, Stripe subscriptions, and a simple progress view. Do not build AI-generated child content until moderation and quality controls are ready.
