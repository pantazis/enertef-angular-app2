

Add the following to the menu src\app\shared\sidebar\sidebar.component.html
Use components if they match with the views.
USE EXITING SCSS src\styles.scss

## 🌍 Public (Visitor)  
Visible to **everyone**, no login.  

- **Services Catalog list** → browse services offered.   
- **Find a Partner list** → directory/search for organizations or experts.  
- **Discover Assets list** → browse datasets, tools, digital twins.  
- **Matchmaking Requests list** → see open collaboration/matchmaking opportunities.  

---
under parent category my EnerTEF HIDE IF USER NOT LOGED IN 
    ## 👤 Common (All authenticated users)  
    Everyone after login.  

    - **Dashboard (personal)** → quick overview, recent actions, shortcuts.  
    - **Messages / Notifications** → inbox for system messages, negotiations.  
    - **Profile & Settings** → edit personal info, password, preferences.  
    - **Billing / Wallet** → see payments, credits, invoices.  

    ---

    ## 🟢 End-User (Requester)  
    For **individuals requesting services**.  

    - **My Organisations** → orgs you belong to as a member.  
    - **My Matchmaking Dashboard** → your open matchmaking cases.  
    - **My Service Requests** → create/manage requests for services.  
    - **Proposals to My Requests** → see responses from providers.  
    - **My Experiments (Workbench)** → run accepted services in practice.  
    - **My Resource Usage** → usage stats for your jobs.  
    - **Payments** → invoices/receipts for your usage.  
    - **My Disputes** → disputes you opened as a requester.  

    ---

    ## 🔵 Service Developer (Provider)  
    For **organizations/individuals offering services/assets**.  

    - **Incoming Service Requests** → open requests from End-Users you can respond to.  
    - **My Proposals** → proposals you sent to specific requests.  
    - **My Services (Provider CMS)** → manage your service listings in catalog.  
    - **Provider Assets** → datasets/tools/digital twins you registered.  
    - **Provider Experiments** → monitor experiments using your services/assets.  
    - **Provider Usage & Revenue** → see how much your services are used & revenue.  
    - **Provider Disputes** → disputes where you are a party (as provider).  

    ---

    ## 🟠 Organization Admin  
    For **admins of an organization profile**.  

    - **Organization Profile Admin** → manage org info (logo, description, capabilities).  
    - **Team & Roles** → invite/remove members, assign roles (End-User/Dev/Admin).  
    - **Org Services Portfolio** → manage services linked to org.  
    - **Org Billing / Contracts** → org-level contracts, invoices.  
    - **Org Activity** → audit log of all actions by org members.  

    ---

    ## 🔴 TEF Admin (Marketplace Governance)  
    For **global administrators of EnerTEF**.  

    - **Validate Services / Proposals** → approve/validate before publishing.  
    - **Resource Monitoring (Global)** → see CPU/GPU usage across all nodes.  
    - **My TEF Assets** → oversee datasets, platforms, resources of TEF.  
    - **Requests (global)** → see all service requests across marketplace.  
    - **Proposals (global)** → see all proposals across marketplace.  
    - **Disputes (Arbitration)** → intervene in disputes, act as arbitrator.  
    - **Nodes & Agents Registry** → register nodes, check agents, compliance.  

    ---

    ## 🟣 Platform / Node Admin (Infrastructure Operator)  
    For **local node operators**.  

    - **Register TEF Node** → onboard their lab/cluster to EnerTEF.  
    - **Install HPC Agent** → install/connect the agent software.  
    - **Node Monitoring (scoped to their node)** → view resource usage & queued jobs only for their node.  

    ---

## 🔑 Summary  

- **Public** = discovery.  
- **Common** = personal utilities.  
- **End-User** = workspace for consumers of services.  
- **Service Developer** = workspace for providers of services.  
- **Org Admin** = manage the organization’s profile, team, and portfolio.  
- **TEF Admin** = global governance, validation, arbitration, monitoring.  
- **Node Admin** = local system operator of one TEF node.  
