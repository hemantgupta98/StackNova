/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { toast as sonnerToast } from "sonner"

type ToastOptions = Parameters<typeof sonnerToast>[1]

const GAP_MS = 600

type QueuedItem = {
  fn: (...args: any[]) => any
  args: any[]
}

const queue: QueuedItem[] = []
let processing = false

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

async function processQueue() {
  if (processing) return
  processing = true
  while (queue.length) {
    const item = queue.shift()!
    try {
      item.fn(...item.args)
    } catch (err) {
      // ignore errors from toast invocation
      // eslint-disable-next-line no-console
      console.error(err)
    }
    await sleep(GAP_MS)
  }
  processing = false
}

export function qToast(message: string, options?: ToastOptions) {
  queue.push({ fn: sonnerToast, args: [message, options] })
  void processQueue()
}

export function qSuccess(message: string, options?: ToastOptions) {
  queue.push({ fn: sonnerToast.success, args: [message, options] })
  void processQueue()
}

export function qInfo(message: string, options?: ToastOptions) {
  queue.push({ fn: sonnerToast.info, args: [message, options] })
  void processQueue()
}

export function qError(message: string, options?: ToastOptions) {
  queue.push({ fn: sonnerToast.error, args: [message, options] })
  void processQueue()
}

export function qLoading(message: string, options?: ToastOptions) {
  queue.push({ fn: sonnerToast.loading, args: [message, options] })
  void processQueue()
}

export default {
  qToast,
  qSuccess,
  qInfo,
  qError,
  qLoading,
}
