import React, { useEffect,useState } from 'react';
import axios from "axios";
import { CardColumns,Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const App = () => {
    const [users,setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const result = await axios.get("https://fakestoreapi.com/products");
        setPosts(result.data);
    };

   

    return (
        <div className="container">
            <div className="py-4">
                <h1> Products</h1>
                
                <CardColumns>
   {users.map((user, index) => (
    <Card >
      <Card.Body>
      <Card.Text variant="h5" component="h2">
        <td><Card.Header>{user.id}</Card.Header></td>
        </Card.Text>

        <Card.Text variant="body2" component="p">
        <td><i>   <Typography variant="h6" gutterBottom>
        Title:
      </Typography>{user.title}</i></td>
        </Card.Text>
        <Card.Text variant="body2" component="p">
        <td><td><i><Typography variant="h6" gutterBottom>
        Price:
      </Typography>{user.price}</i></td></td>
        </Card.Text>
        <Card.Text variant="body2" component="p">
        <td><td><td><i><Typography variant="h6" gutterBottom>
        Description:
      </Typography>{user.description}</i></td></td></td>
        </Card.Text>
        <Card.Text variant="body2" component="p">
        <td><i><Typography variant="h6" gutterBottom>
        Category:
      </Typography>{user.category}</i></td>
        </Card.Text>
        <Card.Text variant="body2" component="p">
        <td><i><img  style={{
           width:"300px",
          }} src={user.image} alt="" /></i></td>
        </Card.Text>
        
        
        </Card.Body>
        </Card>
         /* {
         
         
          }*/
        
       ))
   }
   </CardColumns>
  
            </div>
        </div>
    );
};

export default App;
