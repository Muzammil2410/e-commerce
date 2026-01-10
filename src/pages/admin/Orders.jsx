import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Orders = () => {
  const { toast } = useToast();
  // Mock data - in real app, this would come from API
  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      customer: "John Doe",
      email: "john@example.com",
      phone: "+1 234 567 8900",
      items: 2,
      orderItems: [
        { name: "NO.31", quantity: 1 },
        { name: "NO.44", quantity: 1 },
      ],
      total: "299.00",
      status: "Pending",
      date: "2024-01-15",
      address: "123 Main St, New York, NY 10001",
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 234 567 8901",
      items: 1,
      orderItems: [
        { name: "BLACK VANILLA", quantity: 1 },
      ],
      total: "149.00",
      status: "Delivered",
      date: "2024-01-14",
      address: "456 Oak Ave, Los Angeles, CA 90001",
    },
    {
      id: "ORD-003",
      customer: "Mike Johnson",
      email: "mike@example.com",
      phone: "+1 234 567 8902",
      items: 3,
      orderItems: [
        { name: "NOIR JASMINE", quantity: 2 },
        { name: "FRUITÉ PARFAIT", quantity: 1 },
      ],
      total: "449.00",
      status: "Confirmed",
      date: "2024-01-14",
      address: "789 Pine Rd, Chicago, IL 60601",
    },
    {
      id: "ORD-004",
      customer: "Sarah Williams",
      email: "sarah@example.com",
      phone: "+1 234 567 8903",
      items: 1,
      orderItems: [
        { name: "FACE CREAM CLÉA", quantity: 1 },
      ],
      total: "199.00",
      status: "Shipped",
      date: "2024-01-13",
      address: "321 Elm St, Houston, TX 77001",
    },
    {
      id: "ORD-005",
      customer: "David Brown",
      email: "david@example.com",
      phone: "+1 234 567 8904",
      items: 2,
      orderItems: [
        { name: "AMBER RUSH", quantity: 1 },
        { name: "OBSIDIAN", quantity: 1 },
      ],
      total: "349.00",
      status: "Pending",
      date: "2024-01-13",
      address: "654 Maple Dr, Phoenix, AZ 85001",
    },
  ]);

  const statusOptions = ["Pending", "Confirmed", "Shipped", "Delivered", "Returned", "Cancelled"];

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    toast({
      title: "Status Updated",
      description: `Order ${orderId} status changed to ${newStatus}`,
    });
  };

  const getStatusBadge = (status) => {
    const variants = {
      Pending: "secondary",
      Confirmed: "default",
      Shipped: "default",
      Delivered: "default",
      Returned: "destructive",
      Cancelled: "destructive",
    };
    return variants[status] || "secondary";
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-2">
              Orders
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Manage and track all customer orders
            </p>
          </div>
          <Input
            placeholder="Search orders..."
            className="w-full sm:w-64 bg-background border-border"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl font-light text-foreground">
              All Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs tracking-luxury uppercase">Order ID</TableHead>
                    <TableHead className="text-xs tracking-luxury uppercase">Customer</TableHead>
                    <TableHead className="text-xs tracking-luxury uppercase">Contact</TableHead>
                    <TableHead className="text-xs tracking-luxury uppercase">Items</TableHead>
                    <TableHead className="text-xs tracking-luxury uppercase">Total</TableHead>
                    <TableHead className="text-xs tracking-luxury uppercase">Status</TableHead>
                    <TableHead className="text-xs tracking-luxury uppercase">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium text-foreground">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm text-foreground">{order.customer}</p>
                          <p className="text-xs text-muted-foreground">{order.address}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="text-xs text-foreground">{order.email}</p>
                          <p className="text-xs text-muted-foreground">{order.phone}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          {order.orderItems?.map((item, index) => (
                            <p key={index} className="text-sm text-foreground">
                              {item.name} x {item.quantity}
                            </p>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm font-medium text-foreground">PKR {order.total}</TableCell>
                      <TableCell>
                        <Select
                          value={order.status}
                          onValueChange={(value) => handleStatusChange(order.id, value)}
                        >
                          <SelectTrigger className="w-[150px] h-8 bg-background border-border text-xs [&_svg]:hidden">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {statusOptions.map((status) => (
                              <SelectItem 
                                key={status} 
                                value={status} 
                                className="text-xs cursor-pointer hover:bg-secondary transition-colors"
                              >
                                {status}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground">{order.date}</TableCell>
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

export default Orders;

