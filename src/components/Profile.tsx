import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { User, Mail, Phone, Bell, Shield, CreditCard } from 'lucide-react';

interface ProfileProps {
  selectedPersona: string;
}

const PERSONA_NAMES = {
  'student': 'Student Profile',
  'gig-worker': 'Gig Worker Profile', 
  'first-earner': 'First Earner Profile',
  'rural-entrepreneur': 'Rural Entrepreneur Profile'
};

export function Profile({ selectedPersona }: ProfileProps) {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h2 className="mb-1">John Doe</h2>
            <p className="text-sm text-muted-foreground">Member since Jan 2024</p>
            {selectedPersona && (
              <Badge variant="secondary" className="mt-2">
                {PERSONA_NAMES[selectedPersona as keyof typeof PERSONA_NAMES] || 'Profile'}
              </Badge>
            )}
          </div>
        </div>
      </Card>

      {/* Personal Information */}
      <Card className="p-4">
        <h3 className="mb-4 flex items-center space-x-2">
          <User className="w-4 h-4" />
          <span>Personal Information</span>
        </h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <Input id="email" type="email" defaultValue="john.doe@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
            </div>
          </div>
        </div>
      </Card>

      {/* Preferences */}
      <Card className="p-4">
        <h3 className="mb-4 flex items-center space-x-2">
          <Bell className="w-4 h-4" />
          <span>Notifications</span>
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Goal Reminders</p>
              <p className="text-sm text-muted-foreground">Get notified about your financial goals</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Weekly Reports</p>
              <p className="text-sm text-muted-foreground">Receive weekly financial summaries</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Expense Alerts</p>
              <p className="text-sm text-muted-foreground">Alert when spending exceeds budget</p>
            </div>
            <Switch />
          </div>
        </div>
      </Card>

      {/* Security */}
      <Card className="p-4">
        <h3 className="mb-4 flex items-center space-x-2">
          <Shield className="w-4 h-4" />
          <span>Security</span>
        </h3>
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Two-Factor Authentication
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Privacy Settings
          </Button>
        </div>
      </Card>

      {/* Payment Methods */}
      <Card className="p-4">
        <h3 className="mb-4 flex items-center space-x-2">
          <CreditCard className="w-4 h-4" />
          <span>Connected Accounts</span>
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">CC</span>
              </div>
              <div>
                <p className="font-medium">Credit Card</p>
                <p className="text-sm text-muted-foreground">•••• 4242</p>
              </div>
            </div>
            <Badge variant="outline">Connected</Badge>
          </div>
          <div className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">BA</span>
              </div>
              <div>
                <p className="font-medium">Bank Account</p>
                <p className="text-sm text-muted-foreground">•••• 8765</p>
              </div>
            </div>
            <Badge variant="outline">Connected</Badge>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <div className="space-y-3">
        <Button className="w-full">Save Changes</Button>
        <Button variant="outline" className="w-full">Export Data</Button>
        <Button variant="destructive" className="w-full">Delete Account</Button>
      </div>
    </div>
  );
}