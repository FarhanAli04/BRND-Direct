"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUpBuyer, type AuthFormState } from "../actions";

const initial: AuthFormState = {};

const regStyles = `
.auth-left.buyer-reg { background: var(--color-near-black); }
.auth-left.buyer-reg .auth-left__bg {
  background:
    radial-gradient(ellipse 70% 60% at 30% 20%, rgba(79,70,229,.3) 0%, transparent 60%),
    radial-gradient(ellipse 50% 50% at 80% 80%, rgba(16,185,129,.12) 0%, transparent 60%);
}
.auth-card--wide { max-width: 540px; }
.reg-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(255,255,255,.08); color: rgba(255,255,255,.7);
  font-size: .72rem; font-weight: 700; letter-spacing: .06em;
  text-transform: uppercase; padding: 5px 14px;
  border-radius: 100px; margin-bottom: 14px;
  border: 1px solid rgba(255,255,255,.1);
}
.reg-benefit {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 10px 12px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.07);
  border-radius: 10px;
  margin-bottom: 7px;
}
.reg-benefit:first-child { background: rgba(79,70,229,.15); border-color: rgba(79,70,229,.3); }
.reg-benefit-icon {
  width: 30px; height: 30px; border-radius: 8px; flex-shrink: 0;
  background: rgba(79,70,229,.2); color: #a5b4fc;
  display: flex; align-items: center; justify-content: center; font-size: .76rem;
}
.reg-benefit-icon.green { background: rgba(16,185,129,.15); color: #34d399; }
.reg-benefit-title { font-size: .78rem; font-weight: 700; color: rgba(255,255,255,.9); margin-bottom: 2px; }
.reg-benefit-desc  { font-size: .7rem;  color: rgba(255,255,255,.4); line-height: 1.45; }
.reg-trust {
  display: flex; align-items: center; gap: 10px;
  margin-top: 16px; padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,.08);
}
.reg-avatars { display: flex; }
.reg-avatar {
  width: 28px; height: 28px; border-radius: 50%;
  border: 2px solid var(--color-near-black);
  display: flex; align-items: center; justify-content: center;
  font-size: .6rem; font-weight: 700; color: white;
  margin-right: -8px; background: var(--color-accent);
}
.reg-trust-text { font-size: .78rem; color: rgba(255,255,255,.4); padding-left: 10px; }
.reg-trust-text strong { color: rgba(255,255,255,.75); }
.auth-right--register { padding: 40px 32px; }
`;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary btn-lg btn-full"
      disabled={pending}
    >
      {pending ? "Creating account…" : "Create Buyer Account"}
    </button>
  );
}

export default function BuyerRegisterPage() {
  const [state, formAction] = useActionState(signUpBuyer, initial);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: regStyles }} />
      <div className="auth-wrapper">
        <div className="auth-left buyer-reg">
          <div className="auth-left__bg" />
          <div className="auth-left__grid" />
          <div className="auth-left__content">
            <div className="auth-left__logo">
              <Link href="/buyer/login" className="logo-mark">
                <span className="logo-icon">
                  <i className="fas fa-chevron-right" />
                </span>
                <span className="logo-word">
                  BRND <span className="logo-accent">DIRECT</span>
                </span>
              </Link>
            </div>

            <div className="reg-badge">
              <i className="fas fa-bolt" /> Zero setup fees
            </div>

            <h1>
              Join BRND Direct
              <br />
              as a Buyer
            </h1>
            <p>
              Access thousands of verified wholesale brands, unlock flexible
              net terms at checkout, and manage all your orders in one
              intelligent dashboard.
            </p>

            <div className="reg-benefit">
              <div className="reg-benefit-icon">
                <i className="fas fa-store" />
              </div>
              <div>
                <div className="reg-benefit-title">Curated Brand Catalog</div>
                <div className="reg-benefit-desc">
                  Thousands of verified wholesale-ready brands in one place.
                </div>
              </div>
            </div>

            <div className="reg-benefit">
              <div className="reg-benefit-icon green">
                <i className="fas fa-credit-card" />
              </div>
              <div>
                <div className="reg-benefit-title">
                  Flexible Net Terms Built-In
                </div>
                <div className="reg-benefit-desc">
                  Net-30/60/90 &amp; BNPL at checkout — instant approval, no
                  banks.
                </div>
              </div>
            </div>

            <div className="reg-benefit">
              <div className="reg-benefit-icon green">
                <i className="fas fa-box-open" />
              </div>
              <div>
                <div className="reg-benefit-title">Automated Dropshipping</div>
                <div className="reg-benefit-desc">
                  Connect your Shopify or WooCommerce store — we ship premium
                  brands directly to your customers.
                </div>
              </div>
            </div>

            <div className="reg-benefit">
              <div className="reg-benefit-icon">
                <i className="fas fa-chart-bar" />
              </div>
              <div>
                <div className="reg-benefit-title">
                  Analytics &amp; Reorder Alerts
                </div>
                <div className="reg-benefit-desc">
                  Know what&apos;s selling and when to restock, automatically.
                </div>
              </div>
            </div>

            <div className="reg-trust">
              <div className="reg-avatars">
                <div className="reg-avatar">SL</div>
                <div className="reg-avatar" style={{ background: "#10b981" }}>
                  MR
                </div>
                <div className="reg-avatar" style={{ background: "#f59e0b" }}>
                  TP
                </div>
              </div>
              <div className="reg-trust-text">
                <strong>500+ brands &amp; buyers</strong> already on the
                platform
              </div>
            </div>
          </div>
        </div>

        <div className="auth-right auth-right--register">
          <div className="auth-card auth-card--wide fade-in">
            <div className="auth-card__logo">
              <Link href="/buyer/login" className="logo-mark">
                <span className="logo-icon">
                  <i className="fas fa-chevron-right" />
                </span>
                <span className="logo-word logo-word--dark">
                  BRND{" "}
                  <span className="logo-accent logo-accent--dark">DIRECT</span>
                </span>
              </Link>
            </div>

            <h2 style={{ fontSize: "1.45rem" }}>Create Buyer Account</h2>
            <p className="auth-card__sub">
              Access thousands of verified brands at wholesale-direct pricing.
              Already have an account?{" "}
              <Link href="/buyer/login">Sign in →</Link>
            </p>

            {state.error ? (
              <p
                className="auth-card__sub"
                style={{ color: "var(--color-rose)", marginBottom: 12 }}
              >
                {state.error}
              </p>
            ) : null}
            {state.ok ? (
              <p
                className="auth-card__sub"
                style={{ color: "var(--color-emerald)", marginBottom: 12 }}
              >
                {state.ok}
              </p>
            ) : null}

            <form className="signup-form" action={formAction}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="first_name">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    className="form-input"
                    placeholder="Alex"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="last_name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="form-input"
                    placeholder="Johnson"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="business_name">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business_name"
                  name="business_name"
                  className="form-input"
                  placeholder="Johnson Retail Group"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>
                <div className="input-group">
                  <i className="fas fa-envelope input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="alex@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <div className="input-group">
                    <i className="fas fa-lock input-icon" />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-input has-suffix"
                      placeholder="Create password"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="confirm">
                    Confirm Password
                  </label>
                  <div className="input-group">
                    <i className="fas fa-lock input-icon" />
                    <input
                      type="password"
                      id="confirm"
                      name="confirm"
                      className="form-input has-suffix"
                      placeholder="Repeat password"
                      required
                    />
                  </div>
                </div>
              </div>

              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
