# Discord Notification Troubleshooting Guide

If notifications aren't appearing in Discord, follow these steps:

## Step 1: Verify Secret is Set Correctly

1. Go to your GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Verify `DISCORD_WEBHOOK_URL` exists
4. **Important**: The name must be exactly `DISCORD_WEBHOOK_URL` (case-sensitive, no spaces)

## Step 2: Test the Webhook Directly

Run the **"Test Discord Notification"** workflow:

1. Go to **Actions** tab
2. Find **"Test Discord Notification"** workflow
3. Click **Run workflow** → **Run workflow**
4. Check the logs - if it fails, you'll see the exact error

## Step 3: Check Workflow Logs

For the "Discord Notifications" workflow:

1. Go to **Actions** tab
2. Click on a failed **"Discord Notifications"** run
3. Expand each step to see what happened:

### Check "Check Discord webhook secret" step:
- Should show: `✅ Discord webhook secret is configured`
- If it shows: `⚠️ DISCORD_WEBHOOK_URL secret is not set!` → Secret is missing

### Check "Send Discord notification" step:
- Look for HTTP status codes:
  - `200` or `204` = Success ✅
  - `401` = Invalid webhook URL
  - `403` = Webhook expired or no permission
  - `404` = Webhook doesn't exist
  - Other codes = Check the error message

## Step 4: Common Issues

### Issue: "Secret is not set"
**Solution**: 
- Double-check the secret name is exactly `DISCORD_WEBHOOK_URL`
- Make sure you're checking the correct repository
- Secrets are repository-specific

### Issue: HTTP 401/403
**Solution**:
- Your webhook URL might be expired
- Create a new webhook in Discord
- Copy the new URL and update the secret

### Issue: HTTP 404
**Solution**:
- The webhook was deleted in Discord
- The channel was deleted
- Create a new webhook

### Issue: Workflow not running
**Solution**:
- The `workflow_run` trigger only fires AFTER other workflows complete
- Make sure your CI workflows are actually running
- Check that workflow names match exactly: "CI", "Frontend CI", "Backend CI"

### Issue: Workflow runs but no notification
**Solution**:
- Check the "Send Discord notification" step logs
- Look for error messages
- Verify the webhook URL format (should start with `https://discord.com/api/webhooks/`)

## Step 5: Manual Webhook Test

Test your webhook URL directly using curl:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"content": "Test message"}' \
  YOUR_WEBHOOK_URL_HERE
```

If this works, the webhook URL is valid. If it fails, the issue is with the webhook itself.

## Step 6: Verify Webhook in Discord

1. Go to Discord → **Server Settings** → **Integrations** → **Webhooks**
2. Find your webhook
3. Verify it's **enabled**
4. Check that the channel still exists
5. Click **Test** button to send a test message

## Debug Checklist

- [ ] Secret `DISCORD_WEBHOOK_URL` exists in GitHub Secrets
- [ ] Secret name is exactly `DISCORD_WEBHOOK_URL` (case-sensitive)
- [ ] Webhook URL starts with `https://discord.com/api/webhooks/`
- [ ] Webhook is enabled in Discord
- [ ] Channel exists and bot has permissions
- [ ] "Test Discord Notification" workflow succeeds
- [ ] "Discord Notifications" workflow is running
- [ ] Check workflow logs for specific error messages

## Still Not Working?

1. **Check the exact error** in the workflow logs
2. **Try the test workflow** first to isolate the issue
3. **Create a new webhook** in Discord and update the secret
4. **Check Discord server logs** for any blocked messages

## Quick Fix: Recreate Webhook

If nothing works, try recreating the webhook:

1. Delete old webhook in Discord
2. Create new webhook
3. Copy new URL
4. Update GitHub secret with new URL
5. Run test workflow again
