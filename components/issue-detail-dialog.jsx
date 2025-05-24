import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"


export default function IssueDetailsDialog({
  isOpen,
  onClose,
  issue,})
  {
    return (
      <>
  <Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>{issue.title}</DialogTitle>
      <DialogDescription>
       {issue.description}
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
</>
    );

  }