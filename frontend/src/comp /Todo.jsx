import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit"; 
import axios from "axios";

const Todo = () => {
  const [itemName, setItemName] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null); 
  const [editName, setEditName] = useState(""); 

  const fetchTodos = async () => {
    try {
      const response = await axios.post("https://backendfortodo-iomx.onrender.com/view");
      if (response.data.status === "OK") {
        setTodos(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    if (!itemName) return;

    try {
      const response = await axios.post("https://backendfortodo-iomx.onrender.com/add", {
        name: itemName,
      });
      if (response.data.status === "OK") {
        setItemName("");
        fetchTodos();
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleEditTodo = async () => {
    if (!editName || !editingId) return;

    try {
      const response = await axios.post("https://backendfortodo-iomx.onrender.com/edit", {
        id: editingId,
        name: editName,
      });
      if (response.data.status === "OK") {
        setEditName("");
        setEditingId(null); 
        fetchTodos();
      }
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.post("https://backendfortodo-iomx.onrender.com/delete", { id });
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const startEditing = (todo) => {
    setEditName(todo.name); 
    setEditingId(todo._id); 
  };

  return (
    <div 
      className="w-screen overflow-hidden min-h-screen bg-[url('https://images.pexels.com/photos/1097930/pexels-photo-1097930.jpeg')] bg-cover bg-center flex flex-col items-center justify-center"
    >
      <h4 className="mb-5 text-black text-xl ">HERE WE CAN PERFORM CRUD OPERATION 👍</h4>
      
      <div className="flex w-full max-w-sm items-center space-x-2 mb-5">
        <Input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <Button type="button" onClick={handleAddTodo}>
          ADD
        </Button>
      </div>
      
      <div className="w-full max-w-lg">
        <ScrollArea className="h-72 rounded-md border bg-white/70 backdrop-blur-sm p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Todos</h4>
          {todos.map((todo) => (
            <div key={todo._id} className="flex items-center justify-between text-sm border border-black-500 mb-2 p-2 bg-white/90">
              {editingId === todo._id ? (
                <>
                  <Input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Edit item name"
                  />
                  <Button type="button" onClick={handleEditTodo}>
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <span>{todo.name}</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onTouchStart={() => startEditing(todo)} onClick={() => startEditing(todo)}>
                      <EditIcon />
                    </Button>
                    <Button variant="outline" size="icon"  onTouchStart={() => handleDeleteTodo(todo._id)} onClick={() => handleDeleteTodo(todo._id)}>
                      <DeleteIcon />
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};

export default Todo;
