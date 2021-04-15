import react from 'react' 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


function learnMore(e){
    e.preventDefault()
    console.log("in learnMore")
    window.open("https://www.investopedia.com/terms/b/blockchain.asp", '_blank');
}

function learnAI(e){
    e.preventDefault()
    window.open("https://www.investopedia.com/terms/a/artificial-intelligence-ai.asp", '_blank')
}

function mets(e){
    e.preventDefault()
    window.open("https://www.mlb.com/mets", '_blank')
}


function About () {
    const classes = useStyles();


    return (
        <div className="aboutInfo">
            <h3 className="aboutName">Hi, I'm Josh.</h3>
            <p className="aboutText">I'm a software developer passionate about contributing to open source projects and working with teams that try to make to make other's lives better.</p>
            <p className="aboutText">Here are some of my Passions:</p>
       
        <div className="cards">
        <Card className={classes.root} onClick={learnMore}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://base.imgix.net/files/base/ebm/mhlnews/image/2019/04/mhlnews_10632_blockchain_2.png?auto=format&fit=crop&h=432&w=768"
          title="Blockchain"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Blockchain
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A blockchain is a digital record of transactions. The name comes from its structure, in which individual records, called blocks, are linked together in single list, called a chain. Each transaction added to a blockchain is validated by multiple computers on the Internet.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className={classes.root} onClick={learnAI}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f278facccb6d3d3cc3c63b1%2F0x0.jpg"
          title="Artificial Intelligence"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Artificial Intelligence 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className={classes.root} onClick={mets}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fmlb%2F500%2Fnym.png"
          title="The Mets"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            The Mets
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Mets are a New York based team that have some of the most dissapointed fans in the country. It would be a borderline crime for me to recommend you begin watching and, more dangerously, become a fan. However, at your own discretion, feel free to take a look.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
</div>

    )
}


export default About