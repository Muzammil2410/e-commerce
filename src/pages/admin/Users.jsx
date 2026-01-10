import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Users = () => {
  // Mock data - in real app, this would come from API
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 234 567 8900",
      role: "Customer",
      joinedDate: "2024-01-01",
      orders: 5,
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 234 567 8901",
      role: "Customer",
      joinedDate: "2024-01-05",
      orders: 3,
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "+1 234 567 8902",
      role: "Customer",
      joinedDate: "2024-01-10",
      orders: 8,
    },
    {
      id: "4",
      name: "Sarah Williams",
      email: "sarah@example.com",
      phone: "+1 234 567 8903",
      role: "Customer",
      joinedDate: "2023-12-15",
      orders: 2,
    },
    {
      id: "5",
      name: "David Brown",
      email: "david@example.com",
      phone: "+1 234 567 8904",
      role: "Admin",
      joinedDate: "2023-11-20",
      orders: 0,
    },
  ];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getRoleBadge = (role) => {
    return role === "Admin" ? "default" : "secondary";
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-2">
              Users
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Manage all registered users and their accounts
            </p>
          </div>
          <Input
            placeholder="Search users..."
            className="w-full sm:w-64 bg-background border-border"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl font-light text-foreground">
              All Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs tracking-luxury uppercase">User</TableHead>
                    <TableHead className="text-xs tracking-luxury uppercase">Contact</TableHead>
                    <TableHead className="text-xs tracking-luxury uppercase">Role</TableHead>
                    <TableHead className="text-xs tracking-luxury uppercase">Orders</TableHead>
                    <TableHead className="text-xs tracking-luxury uppercase">Joined</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-secondary text-foreground text-xs">
                              {getInitials(user.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-foreground">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-xs text-muted-foreground">{user.phone}</p>
                      </TableCell>
                      <TableCell>
                        <Badge className="px-2 py-1 text-xs font-medium" variant={getRoleBadge(user.role)}>{user.role}</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-foreground">{user.orders}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{user.joinedDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
};

export default Users;

