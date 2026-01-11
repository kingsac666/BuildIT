# Discord Notifications Setup

This guide explains how to set up Discord notifications for your GitHub Actions workflows.

## Overview

The Discord notification workflow (`.github/workflows/discord-notify.yml`) automatically sends notifications to your Discord server when CI/CD workflows complete.

## Setup Instructions

### Step 1: Create a Discord Webhook

1. Open your Discord server
2. Go to **Server Settings** → **Integrations** → **Webhooks**
3. Click **New Webhook**
4. Configure the webhook:
   - **Name**: GitHub Actions (or any name you prefer)
   - **Channel**: Choose the channel where you want notifications
   - **Avatar**: Optional - you can use a GitHub logo
5. Click **Copy Webhook URL**
6. Save this URL - you'll need it in the next step

### Step 2: Add Webhook to GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the secret:
   - **Name**: `DISCORD_WEBHOOK_URL`
   - **Value**: Paste the webhook URL you copied
5. Click **Add secret**

### Step 3: Enable the Workflow

The workflow is already set up and will automatically run when:
- CI workflow completes
- Frontend CI workflow completes
- Backend CI workflow completes

No additional configuration needed!

## Notification Format

Notifications include:
- ✅/❌ Status indicator
- Workflow name
- Branch name
- Commit message
- Author name
- Color-coded embed (green for success, red for failure)

## Customization

### Change Notification Content

Edit `.github/workflows/discord-notify.yml` to customize:
- Message format
- Colors
- Additional information
- Emoji usage

### Add More Workflows

To notify on other workflows, add them to the `workflows` list:

```yaml
workflows: ["CI", "Frontend CI", "Backend CI", "Deploy"]
```

### Use Alternative Method

If the GitHub Action doesn't work, uncomment the curl-based webhook in the workflow file.

## Testing

### Method 1: Test Workflow (Recommended)
1. Go to your GitHub repository → **Actions** tab
2. Find **"Test Discord Notification"** workflow
3. Click **Run workflow** → **Run workflow**
4. Check your Discord channel - you should see a test message

### Method 2: Trigger via Push
1. Make a small change and push to trigger a workflow
2. Wait for the workflow to complete
3. Check your Discord channel for the notification

### Method 3: Manual Workflow Run
1. Go to **Actions** → **Discord Notifications**
2. Click **Run workflow** → Select branch → **Run workflow**
3. Check your Discord channel

## Troubleshooting

### No notifications appearing

1. **Test the webhook first:**
   - Go to Actions → "Test Discord Notification" → Run workflow
   - This will verify your webhook is configured correctly

2. **Check GitHub Secrets:**
   - Go to Settings → Secrets and variables → Actions
   - Verify `DISCORD_WEBHOOK_URL` exists and is correct
   - The secret name must be exactly: `DISCORD_WEBHOOK_URL`

3. **Verify workflow is running:**
   - Go to Actions tab
   - Check if "Discord Notifications" workflow appears
   - Click on it to see if it's running/failing

4. **Check workflow logs:**
   - Open a failed workflow run
   - Check the "Send Discord notification" step logs
   - Look for error messages

5. **Verify Discord webhook:**
   - Go to Discord → Server Settings → Integrations → Webhooks
   - Ensure the webhook is enabled
   - Check that the channel still exists
   - Try copying the webhook URL again

6. **Common issues:**
   - Webhook URL might have extra spaces (copy again)
   - Webhook might be disabled in Discord
   - Channel might have been deleted
   - Bot permissions might be insufficient

### Wrong channel
- Update the webhook channel in Discord server settings
- Or create a new webhook for a different channel

### Too many notifications
- You can modify the workflow to only notify on failures
- Or add conditions to filter specific branches

## Example Notification

```
✅ CI - success

Workflow: CI
Status: ✅ success
Branch: develop
Commit: Add new feature
Author: Your Name
```

## Security Notes

- Never commit webhook URLs to your repository
- Always use GitHub Secrets for sensitive data
- Consider using different webhooks for different environments
- Rotate webhook URLs periodically

## Next Steps

Once set up, you'll automatically receive notifications for:
- ✅ Successful builds
- ❌ Failed builds
- 🔄 Workflow status changes

You can customize the notifications later based on your team's needs!

