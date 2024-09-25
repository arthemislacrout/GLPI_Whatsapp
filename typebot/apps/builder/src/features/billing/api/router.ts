import { router } from '@/helpers/server/trpc'
import { createCheckoutSession } from './createCheckoutSession'
import { getBillingPortalUrl } from './getBillingPortalUrl'
import { getSubscription } from './getSubscription'
import { getUsage } from './getUsage'
import { listInvoices } from './listInvoices'
import { updateSubscription } from './updateSubscription'
import { createCustomCheckoutSession } from './createCustomCheckoutSession'

export const billingRouter = router({
  getBillingPortalUrl,
  listInvoices,
  createCheckoutSession,
  updateSubscription,
  getSubscription,
  getUsage,
  createCustomCheckoutSession,
})
