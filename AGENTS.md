# AGENTS.md - Project Agent Configuration

## Project Overview

**Project:** darts-tool-bmad  
**Methodology:** BMAD (Brainstorming, Market Research, Analysis & Design)  
**Framework:** BMM (Brainstorming & Market Methodology)

---

## 🎯 Tracking System Configuration

### Primary Tracking: GitHub Projects

**THIS PROJECT USES GITHUB PROJECTS FOR ALL WORK TRACKING**

Instead of the file-based tracking system (`sprint-status.yaml`), this project uses a **GitHub Project** as the single source of truth for all epics, stories, and development status.

**GitHub Project Details:**
- **Project Name:** BMAD - Darts
- **Project ID:** PVT_kwHOBdmhxc4BRihH
- **URL:** https://github.com/users/IsakHolmdahl/projects/1
- **Owner:** IsakHolmdahl
- **Status:** Open (Active)

### Why GitHub Projects?

1. **Visual Kanban Board** - Drag-and-drop interface for managing work items
2. **Real-time Collaboration** - Multiple stakeholders can view and update status
3. **Integration with Issues** - Stories can be linked to GitHub Issues for detailed tracking
4. **Custom Fields** - Can add status, priority, assignees, and other metadata
5. **Automation** - GitHub Actions can update project items automatically
6. **Cross-platform Access** - Available on web, mobile, and GitHub CLI

---

## 📋 Project Structure in GitHub

### Epics (Draft Issues)

Epics are stored as **Draft Issues** in the GitHub Project. Each epic contains:

- **Title:** Epic X: [Epic Name] (e.g., "Epic 1: Core Game Foundation")
- **Body:** Full epic specification including:
  - Goal
  - User Outcome
  - Functional Requirements Covered (FRs)
  - Technical Notes
  - Dependencies
  - List of Stories

**Current Epics:**
1. Epic 1: Core Game Foundation (10 stories)
2. Epic 2: Multiplayer Experience (5 stories)
3. Epic 3: Solo Play with AI (3 stories)
4. Epic 4: Professional Tools (9 stories)
5. Epic 5: Data Management (3 stories)

### Stories (Issues)

Stories are stored as **GitHub Issues** and linked to the project. Each story contains:

- **Title:** Story X.Y: [Story Title] (e.g., "Story 1.1: Create New Game")
- **Body:** Full story specification including:
  - User Story format (As a... I want... So that...)
  - Acceptance Criteria (Given/When/Then)
  - Technical Notes
  - Parent Epic reference
  - FRs Implemented
- **Status:** Tracked via project columns (To Do, In Progress, Done)
- **Assignees:** Can be assigned to team members
- **Labels:** Can be tagged (epic-1, epic-2, etc.)

**Total Stories:** 30

---

## 🔄 Workflow for Agents

### When Starting Work

1. **Check GitHub Project First**
   ```bash
   # View the project
   gh project view 1 --owner IsakHolmdahl
   
   # List all items
   gh project item-list 1 --owner IsakHolmdahl
   ```

2. **Fetch Current Status**
   - Use GitHub CLI or API to get the latest project state
   - Check which stories are "In Progress" vs "To Do"
   - Review epic priorities

3. **Update Status in GitHub Project**
   - Move items between columns as work progresses
   - Add comments to issues for progress updates
   - Assign issues when starting work

### Status Definitions (GitHub Project Columns)

**Recommended Column Setup:**

| Column | Description |
|--------|-------------|
| **📋 Backlog** | Stories/epics not yet started |
| **🔖 Ready** | Stories ready for development (AC defined, no blockers) |
| **🏗️ In Progress** | Currently being worked on |
| **👀 In Review** | Code complete, awaiting review |
| **✅ Done** | Completed and merged |

**Epic Status Mapping:**
- All stories in "Backlog" → Epic is "backlog"
- Any story "In Progress" → Epic is "in-progress"
- All stories "Done" → Epic is "done"

### Active Sprint Board

For focused sprint execution, create a filtered view in your GitHub Project called **"Current Sprint"** that shows only the stories for the epic currently being worked on (e.g., only Epic 1 stories during the Epic 1 sprint).

**How to use the Current Sprint board:**
- When starting work on a story: Move it from "To Do"/"Backlog" to **"In Progress"** column
- When development is complete and ready for review: Move it to **"In Review"** column (this typically happens when you create a Pull Request)
- After approval and merging: Move it to **"Done"** column
- The sprint is complete when all stories for the current epic are in the "Done" column

This approach keeps all epics and stories in the main project board while providing a focused view for active sprint execution.

---

## 🛠️ GitHub CLI Commands for Agents

### View Project
```bash
# View project details
gh project view 1 --owner IsakHolmdahl

# List all items (JSON format for parsing)
gh project item-list 1 --owner IsakHolmdahl --format json
```

### View Specific Items
```bash
# View an epic (draft issue)
gh project item-list 1 --owner IsakHolmdahl --format json | jq '.items[] | select(.content.title | contains("Epic 1"))'

# View stories for an epic
gh project item-list 1 --owner IsakHolmdahl --format json | jq '.items[] | select(.content.title | startswith("Story 1"))'
```

### Update Status
```bash
# Edit an issue (story)
gh issue edit <issue-number> --add-label "in-progress"

# Add comment to issue
gh issue comment <issue-number> --body "Started development"
```

---

## 📝 Agent Guidelines

### DO:

✅ **Query GitHub Project** for current status before starting work  
✅ **Update GitHub Project** when completing stories or epics  
✅ **Create GitHub Issues** for new stories (not files)  
✅ **Add comments** to issues for progress tracking  
✅ **Use labels** to organize work (epic-1, epic-2, priority-high, etc.)  
✅ **Reference GitHub Project items** in commit messages and PRs  

### DON'T:

❌ **Create sprint-status.yaml** - Use GitHub Project instead  
❌ **Create story files in _bmad-output/implementation-artifacts/** - Use GitHub Issues  
❌ **Update local files for status tracking** - Sync with GitHub Project  
❌ **Assume file-based tracking** - Always check GitHub Project first  

---

## 🎭 Agent Roles & Responsibilities

### Scrum Master (SM) Agent
- **Primary:** Manage GitHub Project board
- **Create:** Draft Issues for epics
- **Update:** Story statuses as development progresses
- **Monitor:** Epic completion status
- **Coordinate:** Sprint planning via GitHub Project

### Developer (Dev) Agent
- **Primary:** Implement stories
- **Update:** Move stories to "In Progress" when starting
- **Complete:** Move stories to "Done" when finished
- **Reference:** Link commits and PRs to GitHub Issues

### Product Manager (PM) Agent
- **Primary:** Define epics and stories
- **Create:** Draft Issues for epics, Issues for stories
- **Prioritize:** Order items in GitHub Project
- **Review:** Validate acceptance criteria in issue bodies

### QA Agent
- **Primary:** Test completed stories
- **Update:** Add test results as issue comments
- **Track:** Bug reports as new GitHub Issues
- **Verify:** Move stories to "Done" after validation

---

## 🔗 Integration Points

### GitHub Issues ↔ Project Items

When a GitHub Issue is created and added to the project:
- It appears in the project board
- Status changes in the project reflect on the issue
- Comments on the issue are visible in project views

### Commits & PRs

Reference GitHub Issues in commits:
```
feat: implement score validation

Implements Story 1.3: Enter and Validate Scores
Closes #42

- Adds numeric input validation
- Implements score range checking (0-180)
- Updates game state on valid entry
```

### Automation (Optional)

GitHub Actions can:
- Automatically move issues to "In Progress" when assigned
- Move to "Done" when PR is merged
- Add labels based on branch names
- Notify stakeholders on status changes

---

## 📊 Reporting & Analytics

### Sprint Progress

View in GitHub Project:
- Count of items per column (status breakdown)
- Epic completion percentage
- Story velocity (items completed per sprint)

### Command Examples

```bash
# Count stories by status
gh project item-list 1 --owner IsakHolmdahl --format json | jq -r '.items[] | select(.content.title | startswith("Story")) | .status' | sort | uniq -c

# List completed stories
gh project item-list 1 --owner IsakHolmdahl --format json | jq -r '.items[] | select(.status == "Done") | .content.title'

# Epic progress summary
gh project item-list 1 --owner IsakHolmdahl --format json | jq -r '.items[] | select(.content.title | startswith("Epic")) | .content.title'
```

---

## 🚀 Getting Started (For New Agents)

1. **Install GitHub CLI** (if not already available)
   ```bash
   # macOS
   brew install gh
   
   # Login
   gh auth login
   ```

2. **Verify Project Access**
   ```bash
   gh project view 1 --owner IsakHolmdahl
   ```

3. **Explore Current Work**
   ```bash
   # List all epics
   gh project item-list 1 --owner IsakHolmdahl --format json | jq -r '.items[] | select(.content.title | startswith("Epic")) | .content.title'
   
   # List all stories
   gh project item-list 1 --owner IsakHolmdahl --format json | jq -r '.items[] | select(.content.title | startswith("Story")) | .content.title'
   ```

4. **Start Working**
   - Identify the next story to work on
   - Update its status in the GitHub Project
   - Begin implementation
   - Update status as you progress

---

## 📚 Related Documents

- **BMAD Methodology:** `_bmad/` directory
- **BMM Config:** `_bmad/bmm/config.yaml`
- **Workflows:** `_bmad/bmm/workflows/`
- **Planning Artifacts:** `_bmad-output/planning-artifacts/`
- **GitHub Project:** https://github.com/users/IsakHolmdahl/projects/1

---

## 📝 Notes

- **Source of Truth:** GitHub Project is the SINGLE source of truth for all work tracking
- **File Artifacts:** Documentation files (PRD, Architecture, etc.) live in `_bmad-output/planning-artifacts/`
- **Status Tracking:** All status tracking happens in GitHub Project, not in local files
- **Synchronization:** Always sync with GitHub Project before starting work

---

**Last Updated:** 2026-03-13  
**Project:** darts-tool-bmad  
**Tracking System:** GitHub Projects (BMAD - Darts)
