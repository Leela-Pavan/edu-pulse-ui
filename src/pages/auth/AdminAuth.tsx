import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Award, ArrowLeft, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminAuth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple admin credentials: Admin/Admin
    if (username.toLowerCase() === 'admin' && password === 'admin') {
      toast({
        title: "Admin Login Successful",
        description: "Welcome to EduTrack Admin Portal!",
      });
      navigate('/admin-dashboard');
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid admin credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-warning-light/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-warning-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Admin Portal</h1>
              <Badge variant="secondary">EduTrack Control</Badge>
            </div>
          </div>
        </div>

        <Card className="shadow-glow border-0 bg-surface/80 backdrop-blur-sm">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-warning" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">System Administrator</h2>
              <p className="text-muted-foreground text-sm">Secure access to system controls</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="username" className="text-foreground">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter admin username"
                  className="mt-2"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  className="mt-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-warning hover:bg-warning/90 text-warning-foreground">
                Access Admin Portal
              </Button>
            </form>

            <div className="mt-8 p-4 bg-warning/5 rounded-lg border border-warning/20">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-warning mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground text-sm">Default Credentials</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Username: <code className="bg-muted px-1 py-0.5 rounded">Admin</code><br />
                    Password: <code className="bg-muted px-1 py-0.5 rounded">admin</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                🔒 Secure admin access • Full system control
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminAuth;