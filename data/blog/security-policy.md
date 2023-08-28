---
pubDate: "Aug 28 2023"
title: "Security Policy"
description: "Vulnerability Disclosure Policy (VDP)"
excerpt: "Our Vulnerability Disclosure Policy (VDP) is intended to give security researchers clear guidelines for conducting vulnerability discovery activities and to convey our preferences in how to submit discovered vulnerabilities to us."
tags: [policy, security, vulnerability, disclosure]
---

## Vulnerability Disclosure Policy
CISO360AI is committed to ensuring the security of its customers, users and partners by protecting their information.

Our Vulnerability Disclosure Policy (VDP) is intended to give security researchers clear guidelines for conducting vulnerability discovery activities and to convey our preferences in how to submit discovered vulnerabilities to us.

This policy describes **what systems and types of research are covered** under this policy, **how to send** us vulnerability reports, and **how long** we ask security researchers to wait before publicly disclosing vulnerabilities.

We encourage you to contact us to report potential vulnerabilities in our systems.

## Authorization
**If you make a good faith effort to comply with this policy during your security research, we will consider your research to be authorized, we will work with you to understand and resolve the issue quickly, and CISO360AI will not recommend or pursue legal action related to your research.**

**Should legal action be initiated by a third party against you for activities that were conducted in accordance with this policy, we will make this authorization known.**

## Guidelines
Under this policy, “research” means activities in which you:

- Notify us as soon as possible after you discover a real or potential security issue.
- Make every effort to avoid privacy violations, degradation of user experience, disruption to production systems, and destruction or manipulation of data.
- Only use exploits to the extent necessary to confirm a vulnerability’s presence. Do not use an exploit to compromise or exfiltrate data, establish persistent command line access, or use the exploit to pivot to other systems.
- Provide us a reasonable amount of time to resolve the issue before you disclose it publicly.
- Do not submit a high volume of low-quality reports.

Once you’ve established that a vulnerability exists or encounter any sensitive data (including personally identifiable information, financial information, or proprietary information or trade secrets of any party), **you must stop your test, notify us immediately, and not disclose this data to anyone else.**

## Test methods
The following test methods are NOT authorized:

- Network denial of service (DoS or DDoS) tests or other tests that impair access to or damage a system or data
- Physical testing (e.g. office access, open doors, tailgating)
- Social engineering (e.g. phishing, vishing), or
- Any other non-technical vulnerability testing
- Any instance of vulnerabilites deemed out of scope below

## Scope
This policy applies to the following websites and services, including sub-domains:

- ciso360.ai
- ciso360.net
- Source code at https://github.com/ciso360ai

**Any service not expressly listed above, such as any connected services, are excluded from scope and are not authorized for testing.** 

Additionally, vulnerabilities found in systems from our vendors fall outside of this policy’s scope and should be reported directly to the vendor according to their disclosure policy (if any). 

If you aren’t sure whether a system is in scope or not, contact us at security@ciso360.ai before starting your research (or at the security contact for the system’s domain name listed in the domain WHOIS).

Though we develop and maintain other internet-accessible systems or services, we ask that active research and testing only be conducted on the systems and services covered by the scope of this document. 

If there is a particular system not in scope that you think merits testing, please contact us to discuss it first. We will increase the scope of this policy over time.

## Out of scope
When reporting vulnerabilities, please consider the following:

- The attack scenario.
- The exploitation potential of the vulnerability.
- The security impact of the vulnerability.
 
**The following issues are considered out of scope and are not included within our program:**

- Social engineering-based attacks (e.g., getting a user to click an attacker-controlled link) under any circumstances.
- Subdomain Takeovers.
- Denial of Service, Rate Limiting, or Spamming issues (e.g., layer 7 DOS attacks, Slowloris, etc.)
- Clickjacking on pages with no sensitive actions.
- Man in the Middle (MITM) attacks.
- Attacks requiring physical access to a user's device.
- Vulnerabilities that require privileged access to a victim's device.
- Known vulnerable libraries without a working proof of concept.
- Comma Separated Values (CSV) injection.
- Content spoofing or text injection (e.g., HTML or CSS injection).
- IFRAME injection.
- Reports from automated tools or scans without accompanying demonstration of exploitability.
- Software version disclosure without accompanying demonstration of exploitability.
- Use of a known-vulnerable library without evidence of exploitability.
- Open redirects.
- Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM), or Domain-based Message Authentication Reporting and Conformance (DMARC) record issues.
- Missing best practices.
- Insecure SSL or TLS issues (e.g., ciphers, certificates, etc.).
- User existence or enumeration vulnerabilities.
- Password or account recovery policies (e.g., reset link expiration, password complexity, etc.).
- Any physical attempts.
- Missing security headers (e.g., HTTP Strict-Transport-Security (HSTS), Content Security Policy (CSP), etc.) that do not lead directly to a vulnerability.
- Presence of the “autocomplete” attribute on web forms.
- Host header injections unless you can show how they can lead to stealing user data.
- Insecure cookie settings for non-sensitive cookies.
- Vulnerabilities affecting users of outdated browsers or platforms.
- Issues related to software or protocols not under our control.
- Issues related to descriptive or verbose error messages.
- Vulnerabilities in third party applications that make use of our APIs.
- Github leaks without demonstration of impact.

## Reporting a vulnerability
Information submitted under this policy will be used for defensive purposes only – to mitigate or remediate vulnerabilities.

If your findings include newly discovered vulnerabilities that affect all users of a product or service and not solely CISO360AI, we may share your report with relevant local cyber security agencies, e.g. CERT, where it will be handled under their coordinated vulnerability disclosure process. We will not share your name or contact information without express permission.

**We accept vulnerability reports by email to: security@ciso360.ai**

Reports may be submitted anonymously. If you share contact information, we will acknowledge receipt of your report within 3 business days.

We do not support PGP-encrypted emails. For particularly sensitive information, send an initial email to agree on a secure channel.

## What we would like to see from you
In order to help us triage and prioritize submissions, we recommend that your reports:

- Describe the location the vulnerability was discovered and the potential impact of exploitation.
- Offer a detailed description of the steps needed to reproduce the vulnerability (proof of concept scripts or screenshots are helpful).
- Be in English, if possible.

## What you can expect from us
When you choose to share your contact information with us, we commit to coordinating with you as openly and as quickly as possible.

- Within 3 business days, we will acknowledge that your report has been received.
- To the best of our ability, we will confirm the existence of the vulnerability to you and be as transparent as possible about what steps we are taking during the remediation process, including on issues or challenges that may delay resolution.
- We will maintain an open dialogue to discuss issues.

## Questions
Questions regarding this policy may be sent to security@ciso360.ai

We also invite you to contact us with suggestions for improving this policy.

## Consent
By using our website and services, you hereby consent to our Privacy Policy and agree to our Terms and Conditions.

## Security Hall Of Fame

We would like to thank the following security researchers for having responsibly disclosed vulnerabilities to us!

If you wish to report a security vulnerability and get credit in our Security Hall of Fame please follow our [Coordinated Vulnerability Disclosure](https://ciso360.ai/security-policy/).

  * Kunal Mhaske
