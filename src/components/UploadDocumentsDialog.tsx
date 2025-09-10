import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Upload, FileText, Camera, X } from 'lucide-react';

interface UploadDocumentsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UploadDocumentsDialog({ isOpen, onClose }: UploadDocumentsDialogProps) {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleFileUpload = (type: string) => {
    // Simulate file upload
    setUploadedFiles(prev => [...prev, `${type}_document_${Date.now()}.pdf`]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Documents</DialogTitle>
          <DialogDescription>
            Upload your financial documents to help track your income and expenses
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Upload Options */}
          <div className="grid grid-cols-2 gap-3">
            <Card 
              className="p-4 cursor-pointer hover:bg-accent transition-colors"
              onClick={() => handleFileUpload('bank_statement')}
            >
              <div className="flex flex-col items-center space-y-2">
                <FileText className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium">Bank Statement</span>
              </div>
            </Card>
            
            <Card 
              className="p-4 cursor-pointer hover:bg-accent transition-colors"
              onClick={() => handleFileUpload('income_proof')}
            >
              <div className="flex flex-col items-center space-y-2">
                <Upload className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium">Income Proof</span>
              </div>
            </Card>
            
            <Card 
              className="p-4 cursor-pointer hover:bg-accent transition-colors"
              onClick={() => handleFileUpload('expense_receipt')}
            >
              <div className="flex flex-col items-center space-y-2">
                <Camera className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium">Take Photo</span>
              </div>
            </Card>
            
            <Card 
              className="p-4 cursor-pointer hover:bg-accent transition-colors"
              onClick={() => handleFileUpload('other_document')}
            >
              <div className="flex flex-col items-center space-y-2">
                <FileText className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium">Other</span>
              </div>
            </Card>
          </div>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium">Uploaded Files</h4>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">{file}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button onClick={onClose} className="flex-1">
              Done
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}